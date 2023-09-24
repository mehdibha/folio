#!/bin/bash

yum install wget

# Define the installation directory within your project
INSTALL_DIR="$HOME/project/tinytex"

# Add TinyTeX to the system PATH
# "$INSTALL_DIR/bin/*/tlmgr" path add
# Download and install TinyTeX
curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh -s - --admin --dir "$INSTALL_DIR"

# Add TinyTeX to the system PATH
echo "export PATH=\"$INSTALL_DIR/bin/x86_64-linux:\$PATH\"" >> ~/.bashrc
source ~/.bashrc  # Refresh the shell environment

# Print the TinyTeX version
"$INSTALL_DIR/bin/x86_64-linux/tlmgr" --version