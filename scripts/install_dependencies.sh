#!/bin/bash

# Install curl and perl-Digest-MD5 if they're not already installed
if ! command -v curl &> /dev/null; then
   yum install curl -y
fi

if ! perl -MDigest::MD5 -e 1 &> /dev/null; then
   yum install perl-Digest-MD5 -y
fi

# Define the installation directory for TinyTeX
INSTALL_DIR="$HOME/.TinyTeX"

# Check if TinyTeX is already installed
if [ ! -d "$INSTALL_DIR" ]; then
    # Download and install TinyTeX
    curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh -s - --admin --dir "$INSTALL_DIR"
fi

# Add TinyTeX to the system PATH
echo "export PATH=\"$HOME/.TinyTeX/bin/x86_64-linux:\$PATH\"" >> ~/.bashrc
source ~/.bashrc  # Refresh the shell environment

# Print the TinyTeX version
"$HOME/.TinyTeX/bin/x86_64-linux/tlmgr" --version