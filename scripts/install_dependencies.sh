#!/bin/bash
yum update -y
yum install wget
yum install perl-Digest-MD5 -y

# Define the version of TexLive you want to install (change YYYY to the desired year)
TEXLIVE_VERSION="2023"

# Define the architecture (PLATFORM) you want to install (e.g., x86_64-linux)
PLATFORM="x86_64-linux"

# Define the installation directory
INSTALL_DIR="/usr/local/texlive/$TEXLIVE_VERSION"

# Step 1: Change to the working directory (e.g., /tmp)
cd /tmp

# Step 2: Download TexLive installation files using wget (or curl)
wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz

# Step 3: Extract the downloaded files
tar -xf install-tl-unx.tar.gz

# Step 4: Change to the TexLive installation directory
cd install-tl-*

# Step 5: Install TexLive with no interaction
perl ./install-tl --scheme=medium --no-interaction

# Step 6: Add TexLive binaries to the PATH
echo "export PATH=$INSTALL_DIR/bin/$PLATFORM:\$PATH" | tee -a /etc/profile.d/texlive.sh
source /etc/profile.d/texlive.sh

# Step 7: Clean up temporary files (optional)
cd /tmp
rm -rf install-tl-unx.tar.gz install-tl-*

# Step 8: Verify TexLive installation
tlmgr --version

tlmgr install preprint enumitem ragged2e fancyhdr xifthen \
  ifmtarg setspace parskip tocloft titlesec textpos babel-english \
  isodate substr xltxtra realscripts hyphenat microtype koma-script \
  moderncv colortbl pgf multirow arydshln tabu changepage sectsty