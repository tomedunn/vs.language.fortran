#!/bin/bash

SRC_DIR="./vs.language.fortran"
VSC_DIR="/Applications/Visual Studio Code.app"
PLUGINS_DIR="$VSC_DIR/Contents/Resources/app/plugins"
INSTALL_DIR="$PLUGINS_DIR/vs.language.fortran"

if [ ! -d "$VSC_DIR" ]; then
  echo "Visual Studio Code install not detected..."
  echo "Aborting installation..."
else
  echo "Located Visual Studio Code install directory..."
  if [ ! -d "$INSTALL_DIR" ]; then
    echo "Creating directory $INSTALL_DIR"
    mkdir "$INSTALL_DIR"
  else
    echo "Located plugins directory..."
  fi

  echo "Copying language files into plugins directory..."
  cp -r "$SRC_DIR"/* "$INSTALL_DIR"

  echo "Done instaling vs.language.fortran!"
fi
