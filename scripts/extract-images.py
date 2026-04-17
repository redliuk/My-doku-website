"""
Extract images from PDF and Word documents.

Usage:
    python scripts/extract-images.py <folder_path>
    python scripts/extract-images.py documents/progetto-A

Extracts all images from PDF and DOCX files in the given folder
and saves them to <folder_path>/extracted-images/

Requirements:
    pip install PyMuPDF python-docx Pillow
"""

import sys
import os
from pathlib import Path


def extract_images_from_pdf(pdf_path: Path, output_dir: Path) -> int:
    """Extract images from a PDF file using PyMuPDF."""
    try:
        import fitz  # PyMuPDF
    except ImportError:
        print("ERROR: PyMuPDF not installed. Run: pip install PyMuPDF")
        return 0

    count = 0
    stem = pdf_path.stem

    doc = fitz.open(str(pdf_path))
    for page_num in range(len(doc)):
        page = doc[page_num]
        images = page.get_images(full=True)

        for img_idx, img_info in enumerate(images):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            if base_image is None:
                continue

            image_bytes = base_image["image"]
            image_ext = base_image.get("ext", "png")
            filename = f"{stem}_p{page_num + 1}_img{img_idx + 1}.{image_ext}"
            out_path = output_dir / filename

            with open(out_path, "wb") as f:
                f.write(image_bytes)

            count += 1
            print(f"  Extracted: {filename}")

    doc.close()
    return count


def extract_images_from_docx(docx_path: Path, output_dir: Path) -> int:
    """Extract images from a Word document using python-docx."""
    try:
        from docx import Document
    except ImportError:
        print("ERROR: python-docx not installed. Run: pip install python-docx")
        return 0

    count = 0
    stem = docx_path.stem

    doc = Document(str(docx_path))
    for rel_id, rel in doc.part.rels.items():
        if "image" in rel.reltype:
            image_part = rel.target_part
            image_bytes = image_part.blob
            content_type = image_part.content_type

            ext_map = {
                "image/png": "png",
                "image/jpeg": "jpg",
                "image/gif": "gif",
                "image/bmp": "bmp",
                "image/tiff": "tiff",
                "image/x-emf": "emf",
                "image/x-wmf": "wmf",
            }
            ext = ext_map.get(content_type, "png")
            count += 1
            filename = f"{stem}_img{count}.{ext}"
            out_path = output_dir / filename

            with open(out_path, "wb") as f:
                f.write(image_bytes)

            print(f"  Extracted: {filename}")

    return count


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/extract-images.py <folder_path>")
        print("Example: python scripts/extract-images.py documents/progetto-A")
        sys.exit(1)

    folder = Path(sys.argv[1])
    if not folder.is_dir():
        print(f"ERROR: '{folder}' is not a directory")
        sys.exit(1)

    output_dir = folder / "extracted-images"
    output_dir.mkdir(exist_ok=True)

    pdf_files = list(folder.glob("*.pdf"))
    docx_files = list(folder.glob("*.docx")) + list(folder.glob("*.doc"))

    if not pdf_files and not docx_files:
        print(f"No PDF or Word files found in '{folder}'")
        sys.exit(0)

    total = 0

    for pdf in pdf_files:
        print(f"\nProcessing PDF: {pdf.name}")
        total += extract_images_from_pdf(pdf, output_dir)

    for docx in docx_files:
        if docx.suffix == ".doc":
            print(f"\nSkipping .doc file (only .docx supported): {docx.name}")
            continue
        print(f"\nProcessing Word: {docx.name}")
        total += extract_images_from_docx(docx, output_dir)

    print(f"\nDone. Extracted {total} images to '{output_dir}'")


if __name__ == "__main__":
    main()
