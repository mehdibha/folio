#!/bin/bash

# Fetch changes from the template repository
git fetch template

# Merge changes from the template repository while excluding specific files
git merge -s recursive -X theirs template/main --allow-unrelated-histories --no-commit
git reset ./public ./src/config/site.ts
git commit -m "Update template"
