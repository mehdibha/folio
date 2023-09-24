#!/bin/bash

# Update the package manager and install TeX Live
yum update -y
yum install texlive texlive-latex -y

# Print TeX Live version
echo "pdflatex --version"
pdflatex --version

# Optionally, install additional TeX Live packages as needed
# sudo yum install texlive-<package-name> -y