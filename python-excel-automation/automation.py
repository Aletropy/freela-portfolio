
import os

import pandas as pd


PASTA_ENTRADA = 'planilhas_entrada'
PASTA_SAIDA = 'relatorio_final'
NOME_ARQUIVO_SAIDA = 'relatorio_consolidado.xlsx'

def consolidar_e_gerar_relatorio():
    print("Iniciando o processo de consolidação e geração de relatório...")
    dados_compilados = []

    for nome_arquivo in os.listdir(PASTA_ENTRADA):
        if nome_arquivo.endswith('.xlsx'):
            caminho_arquivo = os.path.join(PASTA_ENTRADA, nome_arquivo)
            print(f"Lendo dados do arquivo: {caminho_arquivo}")
            try:
                df = pd.read_excel(caminho_arquivo)
                dados_compilados.append(df)
            except Exception as e:
                print(f"Erro ao ler o arquivo {caminho_arquivo}: {e}")
    if not dados_compilados:
        print("Nenhum dado foi compilado. Verifique os arquivos de entrada.")
        return
    
    df_consolidado = pd.concat(dados_compilados, ignore_index=True)
    print("Dados consolidados com sucesso.")


    print("Calculando total de vendas por produto...")
    sumario_vendas = df_consolidado.groupby('Produto')['ValorVenda'].sum().reset_index()

    sumario_vendas.rename(columns={'ValorVenda': 'TotalVendido'}, inplace=True)

    sumario_vendas = sumario_vendas.sort_values(
        by='TotalVendido', ascending=False
    )

    print("Cálculos finalizados.")

    if not os.path.exists(PASTA_SAIDA):
        os.makedirs(PASTA_SAIDA)

    caminho_saida = os.path.join(PASTA_SAIDA, NOME_ARQUIVO_SAIDA)
    print(f"Gerando relatório final em: {caminho_saida}")

    with pd.ExcelWriter(caminho_saida, engine='openpyxl') as writer:
        df_consolidado.to_excel(writer, sheet_name='Dados Consolidados', index=False)
        sumario_vendas.to_excel(writer, sheet_name='Sumário por Produto', index=False)
    print("Relatório gerado com sucesso.")

if __name__ == '__main__':
    if not os.path.exists(PASTA_ENTRADA):
        os.makedirs(PASTA_ENTRADA)
        print(f"Criando arquivos de exemplo na pasta '{PASTA_ENTRADA}'...")
        
        dados_a = {'Produto': ['Produto A', 'Produto B', 'Produto A'], 'ValorVenda': [100, 150, 120]}
        pd.DataFrame(dados_a).to_excel(os.path.join(PASTA_ENTRADA, 'filial_A.xlsx'), index=False)
        
        dados_b = {'Produto': ['Produto B', 'Produto C', 'Produto A'], 'ValorVenda': [200, 50, 80]}
        pd.DataFrame(dados_b).to_excel(os.path.join(PASTA_ENTRADA, 'filial_B.xlsx'), index=False)

        dados_c = {'Produto': ['Produto C', 'Produto B', 'Produto C'], 'ValorVenda': [75, 180, 90]}
        pd.DataFrame(dados_c).to_excel(os.path.join(PASTA_ENTRADA, 'filial_C.ods'), index=False)
    
    consolidar_e_gerar_relatorio()