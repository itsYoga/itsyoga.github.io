#!/bin/bash
# Auto-compile LaTeX resume on file changes

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting auto-compile for Resume_alt.tex...${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop${NC}"
echo ""

# Start latexmk in watch mode
latexmk -pdf -pvc Resume_alt.tex

# After latexmk stops, copy PDF to docs folder
if [ -f "Resume_alt.pdf" ]; then
    echo ""
    echo -e "${GREEN}Copying Resume_alt.pdf to ../docs/ folder...${NC}"
    cp Resume_alt.pdf ../docs/
    echo -e "${GREEN}Done!${NC}"
fi

