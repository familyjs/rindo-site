# Support Policy

## Community Maintenance

Rindo is a 100% open source (MIT) project. Developers can ensure Rindo is the right choice for building web
components through Navify’s community maintenance strategy. The Rindo team regularly ships new releases, bug fixes, and
is welcoming to community pull requests.

## Rindo Maintenance and Support Status

Given the reality of time and resource constraints as well as the desire to keep innovating in the frontend development
space, over time it becomes necessary for the Rindo team to shift focus to newer versions of the library. However, the
Rindo team will do everything it can to make the transition to newer versions as smooth as possible. The Rindo team
recommends updating to the newest version of the Rindo for the latest features, improvements and stability updates.

The current status of each Rindo version is:

| Version |     Status     |   Released   | Maintenance Ends | Ext. Support Ends |
|:-------:|:--------------:|:------------:|:----------------:|:-----------------:|
|   V2    |   **Active**   | Aug 11, 2022 |       TBD        |        TBD        |
|   V1    | End of Support | Oct 14, 2022 |   Nov 04, 2022   |   Nov 04, 2022    |

**Maintenance Period**: Only critical bug and security fixes. No major feature improvements.

**Extended Support Period**: For teams and organizations that require additional long term support, Navify has extended support options available.

### Rindo Support Details

Starting with Rindo v2, the Rindo team is adopting a newly revised maintenance policy. When a new major version of
Rindo is released, the previous major version release will enter maintenance mode. While a version of Rindo is in
maintenance mode, only critical bug & security fixes will be applied to that version, and no major feature improvements
will be added. The maintenance period shall last six months from the release of the new major version.

Once the maintenance period has ended for a version of Rindo, that version enters the extended support period. During
the extended support period, only critical bug and security fixes will be applied for teams and organizations using
Rindo's Enterprise offerings. The extended support period lasts for six months from the release of the new major 
version.]

## TypeScript Support

Rindo acts as a compiler for a project's web components, and works closely with the TypeScript compiler to transform
TSX to vanilla JavaScript. To ensure compatibility between the two, Rindo takes an opinionated stance on which version
of the TypeScript compiler must be used.

Rindo includes a recent copy of the TypeScript compiler in its distributable* to guarantee this compatibility. 
The Rindo team is committed to keeping its version of TypeScript up to date and, as of Rindo v2.16.0, attempts to be
within one minor version of the latest TypeScript release.

The table below describes recent versions of Rindo and the version of TypeScript each version shipped with.

| Rindo Version | TypeScript Version |
|:-------------:|:------------------:|
|    v2.16.0    |       v4.5.4       |

The TypeScript team releases a new minor version of the TypeScript compiler approximately once every three months. To
accomplish its goal of staying within one minor version of the latest release, Rindo will update its version of
TypeScript once every three months as well. Updates to the version of TypeScript will often, but not always, occur in a
[minor version release](versioning#minor-release) of Rindo.

The Rindo team acknowledges that TypeScript minor version releases may contain breaking changes. The Rindo team will
do everything in its power to avoid propagating breaking changes to its user base.

\* The TypeScript compiler is never included in the output of your Rindo project, and is only used for compilation 
and type checking purposes.

## Compatibility Recommendations

Rindo is in many regards an opinionated library, and includes much of the software necessary to get users building web
components as quickly as possible. There are a few pieces of software that Rindo allows users to choose to best fit
their team, organizational structure, and existing technical stack. The Rindo team has compiled a series of
compatibility tables to describe the interoperability requirements of these pieces of software and Rindo.

### JavaScript Runtime

| Rindo Version | Node v10 | Node v12 | Node v14 | Node v16 | Node v18 |
|:-------------:|:--------:|:--------:|:--------:|:--------:|:--------:|
|      V2       | &#10060; | &#9989;  | &#9989;  | &#9989;  | &#10060; |
|      V1       | &#9989;  | &#9989;  | &#9989;  | &#9989;  | &#10060; |

### Testing Libraries

#### Jest

| Rindo Version | Jest v24 | Jest v25 | Jest v26 | Jest v27 | Jest v28* |
|:-------------:|:--------:|:--------:|:--------:|:--------:|:---------:|
|      V2       | &#9989;  | &#9989;  | &#9989;  | &#9989;  | &#10060;  |
|      V1       | &#9989;  | &#9989;  | &#9989;  | &#10060; | &#10060;  |

\* Support for Jest 28 will be released in an upcoming version of Rindo.

#### Puppeteer

| Rindo Version | Puppeteer v5 | Puppeteer v6 | Puppeteer v7 | Puppeteer v8 | Puppeteer v9 | Puppeteer v10 |
|:-------------:|:------------:|:------------:|:------------:|:------------:|:------------:|:-------------:|
|      V2       |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |    &#9989;    |
|      V1       |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#10060;    |
