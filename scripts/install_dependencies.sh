#!/bin/bash

yum install wget

# Define the installation directory within your project
INSTALL_DIR="$HOME/project/tinytex"

# Download and install TinyTeX
curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh -s - --admin --dir "$INSTALL_DIR"

# Add TinyTeX to the system PATH
# "$INSTALL_DIR/bin/*/tlmgr" path add
