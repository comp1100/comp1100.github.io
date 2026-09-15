# COMP1100/COMP7110

These are the markdown source for the notes of the course COMP1100/COMP7110 at The University of Queensland.

The student-facing site contains the course overview, studio worksheets, and one-on-one meeting guides. The published innovation reading is Tim Miller's [Introduction to Software Innovation](https://uq.pressbooks.pub/introduction-software-innovation/) ebook; a PDF and Markdown reference copy are retained under `book/`.

## Repository structure

```text
course_notes/
├── _static/                       # Static files used by the generated site
├── assets/                        # Shared course documents, templates and images
├── blackboard/                    # Blackboard announcements and content fragments
│   └── assessment-and-marking/    # Current assessment guides and rendered HTML
├── book/                          # Ebook reference copies, cover and reusable figures
│   └── innovation-book-figures/   # Figures and editable artwork from the ebook
├── marking/                       # Staff marking instructions and one-on-one guides
├── workshops/                     # Weekly studio worksheets and supporting material
│   ├── figs/                      # Images used by workshop pages
│   └── Workshops_2024/            # Archived 2024 workshop material
├── _config.yml                    # Jupyter Book configuration
├── _toc.yml                       # Student-facing site structure
├── intro.md                       # Course overview and schedule
├── references.bib                 # Bibliography used by the notes
├── build.bash                     # Build the student-facing site
├── publish.bash                   # Publish the generated site
└── spell_check.bash               # Check spelling in course sources
```

The generated `_build/` directory is ignored by Git. Content in `blackboard/` is maintained in this repository but excluded from the student-facing Jupyter Book site.

To build the notes, you will need to install [Jupyter Book](https://jupyterbook.org/).

Run `build.bash` to generate the site in `_build/html`. The `publish.bash` script mirrors that generated output into the adjacent `comp1100.github.io` repository, then commits and pushes the publication repository.

These notes are maintained by [Eban Escott](mailto:e.escott@uq.edu.au) for COMP1100 and [Hajar Abedi](mailto:h.abedi@uq.edu.au) for COMP7110.
