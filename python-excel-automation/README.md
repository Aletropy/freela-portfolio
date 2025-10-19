# Projeto de Automação de Planilhas com Python

Este repositório contém um script de automação desenvolvido para resolver tarefas repetitivas de manipulação de planilhas, ideal para pequenas e médias empresas que buscam otimizar seus processos.

## O Problema Resolvido

Muitas empresas recebem dados de vendas de diferentes filiais em arquivos separados (`.xlsx` ou `.ods`). O processo de juntar manualmente todos esses dados, calcular totais e gerar um relatório consolidado é demorado e sujeito a erros.

Este script automatiza 100% desse processo.

## Funcionalidades

- **Leitura Inteligente:** O script lê todos os arquivos de planilhas (formatos `.xlsx` e `.ods`) de uma pasta de entrada.
- **Consolidação Automática:** Todos os dados são combinados em uma única base de dados.
- **Análise e Sumarização:** Calcula automaticamente o total de vendas para cada produto.
- **Geração de Relatório Profissional:** Cria um novo arquivo Excel (`.xlsx`) na pasta `relatorio_final/` com duas abas:
    1.  `Dados Consolidados`: Todos os dados brutos compilados.
    2.  `Sumário por Produto`: Uma tabela clara com o total vendido por produto, ordenada do maior para o menor.

## Como Usar

**Pré-requisitos:**
- Python 3 instalado.

**Execução:**

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/Aletropy/freela-portfolio.git
    cd freela-portfolio/python-excel-automation
    ```

2.  **(Opcional, recomendado) Crie um ambiente virtual:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt 
    ```

4.  **Coloque suas planilhas na pasta `planilhas_entrada/`.**

5.  **Execute o script:**
    ```bash
    python automation.py
    ```

O relatório final será gerado na pasta `relatorio_final/`.

## Tecnologias Utilizadas

- **Python 3:** Linguagem principal, robusta e versátil.
- **Pandas:** Biblioteca líder para análise e manipulação de dados.
- **Openpyxl / Odfpy:** Motores para compatibilidade total com arquivos do Microsoft Excel e LibreOffice Calc.

---

**Precisa de uma automação personalizada para sua empresa? Entre em contato!**
- **Email:** nixanha.mim@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/daviaportela/