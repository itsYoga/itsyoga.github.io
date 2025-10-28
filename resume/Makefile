# Makefile for easy LaTeX compilation
# Usage: make resume, make resume-alt, make watch, make clean

TEX = pdflatex
TEXFLAGS = -interaction=nonstopmode -synctex=1

.PHONY: resume resume-alt watch clean clean-all

# Compile main resume
resume:
	$(TEX) $(TEXFLAGS) Resume.tex
	cp Resume.pdf ../docs/ 2>/dev/null || true

# Compile alternative resume
resume-alt:
	$(TEX) $(TEXFLAGS) Resume_alt.tex
	cp Resume_alt.pdf ../docs/
	$(MAKE) clean-temp

# Watch for changes (using latexmk)
watch:
	latexmk -pdf -pvc Resume_alt.tex

# Watch and auto-copy to docs
watch-docs:
	@echo "Starting auto-compile with auto-copy to docs..."
	@while inotifywait -e modify Resume_alt.tex 2>/dev/null || fswatch -1 Resume_alt.tex 2>/dev/null || true; do \
		echo "Recompiling..."; \
		pdflatex -interaction=nonstopmode Resume_alt.tex > /dev/null; \
		cp Resume_alt.pdf ../docs/; \
		echo "Updated! PDF copied to ../docs/"; \
	done

# Clean temporary files
clean-temp:
	rm -f *.aux *.log *.out *.fdb_latexmk *.fls *.synctex.gz

# Clean everything except source files
clean: clean-temp
	rm -f *.pdf

# Clean docs folder PDFs too
clean-all: clean
	rm -f ../docs/*.pdf

# Default target
.DEFAULT_GOAL := resume-alt

