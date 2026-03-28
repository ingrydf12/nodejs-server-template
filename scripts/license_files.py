import os
import sys
from pathlib import Path

LICENSE = """// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT."""

EXTENSIONS = {".ts", ".js", ".mjs", ".cjs"}
SKIP_DIRS = {"node_modules", "dist", ".git", "coverage"}


def add_license(file: Path) -> bool:
    content = file.read_text(encoding="utf-8")

    if content.startswith(LICENSE):
        return False

    file.write_text(LICENSE + "\n" + content, encoding="utf-8")
    return True


def run(root: Path) -> None:
    updated = []
    skipped = []

    for file in root.rglob("*"):
        if any(part in SKIP_DIRS for part in file.parts):
            continue
        if file.suffix not in EXTENSIONS:
            continue

        if add_license(file):
            updated.append(file.relative_to(root))
        else:
            skipped.append(file.relative_to(root))

    print(f"\n✓ {len(updated)} arquivo(s) atualizado(s)")
    for f in updated:
        print(f"  + {f}")

    if skipped:
        print(f"\n— {len(skipped)} - Skippado")


if __name__ == "__main__":
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")

    if not root.exists():
        print(f"Diretório não encontrado: {root}")
        sys.exit(1)

    print(f"Updating: {root.resolve()}")
    run(root)