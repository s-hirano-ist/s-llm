# Huggingface

## 初期設定

```bash
pyenv virtualenv 3.9.13 s-llm-python-env
pyenv activate s-llm-python-env
pip install huggingface_hub
```

## モデルのダウンロード

```bash
python fetch_model.py cyberagent/DeepSeek-R1-Distill-Qwen-14B-Japanese
```

## モデルの変換

```bash
python llama.cpp/convert_hf_to_gguf.py cyberagent/DeepSeek-R1-Distill-Qwen-14B-Japanese --outfile cyberagent-qwen-jp:14b.gguf  --outtype bf16
```

## モデルの取り込み

```bash
ollama create cyberagent-qwen-jp:14b -f ollama/ModelFile
```

## モデルの実行

```bash
ollama run cyberagent-qwen-jp:14b
```

## Webサイトクローリング

```bash
docker run -v $PWD/crawls:/crawls/ -it webrecorder/browsertrix-crawler crawl --url https://s-hirano.com  --generateWACZ --text --collection test
```
