# Release Guide

## Creating a New Version Section

This section describes how to generate a new section of the docs that coincides with releasing a new major/minor version of Rindo.

The Rindo team uses [Docusaurus' Versioning](https://docusaurus.io/docs/versioning) to create new documentation for new major and minor versions of Rindo core.
The creation of a new version requires some manual work.
Once a new version has been created, a pull request containing the new version can be created/merged.

Docusaurus creates a new version of the documentation based on the contents of the root level `docs/` directory in this project.
When generating a new version, it is assumed that all changes for the soon to be created new versions have already landed in the `main` branch.

To generate a new version:

1. Ensure there are no changes in your local repository
1. Ensure that you have the latest version of `main` - `git checkout main && git pull`
   1. This is important, as a rebase/merge with `main` later will not catch any changes in `docs/` that you don't have locally
1. Check out a new branch to host the changes
1. Generate a new release - `npm run docusaurus docs:version v[VERSION]`
   1. `VERSION` will be the value that is seen in the dropdown on the documentation site.
      e.g. `npm run docusaurus docs:version v4.1` will generate a 'v4.1' version
1. Commit your changes, push the branch, and create a pull request
1. Merging the Pull Request:
   1. Only one approval is need to merge the pull request
   1. Merging the pull request should coincide with the release of Rindo Core, as the doc site automatically deploys to Firebase Hosting
