<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Apache 2.0 License][license-shield]][license-url]

<div align="center">
  <h3 align="center">HTP-1 Documentation</h3>

  <p align="center">
    The user manual and developer documentation for the Monolith HTP-1 home theater processor.
    <br />
    <a href="https://docs.htp1.app"><strong>Read the documentation »</strong></a>
    <br />
    <br />
    <a href="https://docs.htp1.app/user-guide/">User Manual</a>
    &middot;
    <a href="https://github.com/htp1-app/htp1-docs/issues/new?labels=bug">Report a Problem</a>
    &middot;
    <a href="https://github.com/htp1-app/htp1-docs/issues/new?labels=enhancement">Suggest an Improvement</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#suggesting-a-change">Suggesting a Change</a></li>
        <li><a href="#editing-the-manual-yourself">Editing the Manual Yourself</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

The HTP-1 is a 16-channel home theater processor. What started as
an effort to bring Dirac Live Active Room Treatment to the platform grew into a community-driven
project, and the processor has gained a great deal along the way including Dirac ART, a redesigned front panel, a redesigned web UI,
Seat Shaker, per-channel levels, and more.

This documentation is part of that effort: a living manual that keeps pace with the software, and open for any owner to improve it.

- **Written for owners.** Plain language, one chapter per screen in the interface, in the same order
  you meet them on the device.
- **Current.** Covers firmware V2.1.1.
- **Open.** Corrections and additions are welcome from anyone who owns the hardware.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![MkDocs][mkdocs-shield]][mkdocs-url]
[![Material for MkDocs][material-shield]][material-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

The manual is only as good as the corrections it gets. If something is wrong, out of date, or
unclear on your unit, please say so — you do not need to be a developer to help.

### Suggesting a Change

[Open an issue](https://github.com/htp1-app/htp1-docs/issues/new). Say which page you were reading,
what it says, and what you see on your own unit. Screenshots help. That is a complete contribution —
someone will make the edit.

This is the best route for anything you noticed while using your processor: a setting that has moved,
a value that does not match, a step that no longer works, or an explanation that left you guessing.

### Editing the Manual Yourself

Chapters are Markdown files in `docs/user-guide/`, images live in `docs/user-guide/images/`, and the
navigation is set in `mkdocs.yml`. For a small fix, use the pencil icon on any page in GitHub and
open a pull request — no tools required.

To preview a larger change, you need Python 3.12 or newer:

```sh
git clone https://github.com/htp1-app/htp1-docs.git
cd htp1-docs
python -m venv .venv
.venv/bin/pip install -r requirements.txt      # Windows: .venv\Scripts\pip
mkdocs serve                                    # preview at http://127.0.0.1:8000
```

Run `mkdocs build --strict` before opening a pull request. It fails on broken links, missing images,
and pages left out of the navigation — the same check that runs on your pull request.

A few conventions keep the manual readable:

- Plain, direct language; short sentences; explain a term the first time it appears.
- One chapter per page of the interface, matching the name shown on the device.
- Say what the current firmware does. If you are unsure, say so in the pull request rather than
  guessing.

`mkdocs build` writes a plain static site to `site/`, which any static host will
serve if you want to keep a copy of your own.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the Apache License 2.0. See [`LICENSE`](LICENSE) for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Project home: [https://github.com/htp1-app](https://github.com/htp1-app)

Questions and discussion: [open an issue](https://github.com/htp1-app/htp1-docs/issues)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- The HTP-1 core team, for the incredible ongoing work
- The HTP-1 owners' community, whose findings and testing inform much of this manual
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/htp1-app/htp1-docs.svg?style=for-the-badge
[contributors-url]: https://github.com/htp1-app/htp1-docs/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/htp1-app/htp1-docs.svg?style=for-the-badge
[issues-url]: https://github.com/htp1-app/htp1-docs/issues
[license-shield]: https://img.shields.io/github/license/htp1-app/htp1-docs.svg?style=for-the-badge
[license-url]: https://github.com/htp1-app/htp1-docs/blob/main/LICENSE
[mkdocs-shield]: https://img.shields.io/badge/MkDocs-000000?style=for-the-badge&logo=markdown&logoColor=white
[mkdocs-url]: https://www.mkdocs.org/
[material-shield]: https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?style=for-the-badge&logo=materialformkdocs&logoColor=white
[material-url]: https://squidfunk.github.io/mkdocs-material/
