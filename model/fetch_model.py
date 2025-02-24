import argparse
from huggingface_hub import snapshot_download

def main():
    parser = argparse.ArgumentParser(description="Download model snapshot from Hugging Face Hub")
    parser.add_argument("model_id", help="Hugging Face model ID")
    args = parser.parse_args()

    # output_dir equals model_id
    output_dir = args.model_id

    snapshot_download(repo_id=args.model_id, local_dir=output_dir, revision="main")
    print(f"Model {args.model_id} has been successfully downloaded to {output_dir}.")

if __name__ == "__main__":
    main()