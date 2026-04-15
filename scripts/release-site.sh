#!/usr/bin/env bash
set -e

echo "Triggering site deploy via GitHub Actions..."
gh workflow run static.yml --ref main
echo "Deploy started. Check status: gh run list --workflow=static.yml"
