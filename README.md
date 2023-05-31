# Fathom Analytics for Astro

Use this package to add [Fathom's](https://usefathom.com) tracking script to your Astro site.

Astro Fathom exposes all the [advanced tracking options](https://usefathom.com/support/tracking-advanced) as component properties **and** stubs in a console logger when analytics are disabled for easy debugging.

## Fathom Analytics

> Fathom is a simple, light-weight, privacy-first alternative to Google Analytics. So, stop scrolling through pages of reports and collecting gobs of personal data about your visitors, both of which you probably don’t need. Our website stats show up on a single, blazingly fast dashboard so you can make business decisions quickly.

From the [Fathom website](https://usefathom.com/).

## Installation

`npm install astro-fathom`

or

`pnpm install astro-fathom`

or if you really have to,

`yarn add astro-fathom`

## Usage

This package includes a `<Fathom>` component that can be used right in your layout's `<head>`.

```astro
---
import { Fathom } from "astro-fathom"
---

<html>
  <head>
    <!-- head stuff -->
    <Fathom site="<your fathom site id>" />
  </head>
</html>
```

Just looking for a basic script installation? That's it, you're all set!

The Fathom script will be included in all production builds. When running with `astro dev`, `window.fathom` will be shimmed with a logger that outputs all tracking events to the browser's console instead.

### Environment variables

It's common to keep analytics events separate for different deployment environments - for example `test`, `staging`, and `production`. We recommend using the environment variables listed below to configure the correct `site`, keeping your analytics configuration in the same place as your other environment configuration variables.

### Available options

See the Fathom docs for more information on these [advanced tracking options](https://usefathom.com/support/tracking-advanced).

| Name              | Type                              | Default                       | Description                                        |
| ----------------- | --------------------------------- | ----------------------------- | -------------------------------------------------- |
| `enabled`         | Boolean                           | `import.meta.env.PROD`        | When disabled, events are logged to the console    |
| `site`            | String                            | `import.meta.env.FATHOM_SITE` | Your Fathom site id (required)                     |
| `honorDnt`        | Boolean                           | `false`                       | Honor Do Not Track?                                |
| `auto`            | Boolean                           | `true`                        | Automatically track page views?                    |
| `canonical`       | Boolean                           | `true`                        | Use the canonical URL, instead of the current URL? |
| `excludedDomains` | String[]                          | []                            | Excludes tracking for these domains                |
| `includedDomains` | String[]                          | []                            | Include tracking for these domains                 |
| `spa`             | `"auto"`, `"history"` or `"hash"` | `"auto"`                      | Tracking mode                                      |
| `loadType`        | `"defer"` or `"async"`            | `"defer"`                     | Tracking mode                                      |

#### Example

```astro
---
import { Fathom } from "astro-fathom"
---

<html>
  <head>
    <!-- with FATHOM environment variables -->
    <Fathom />

    <!-- or if you prefer to inline configuration variables -->
    <Fathom site="ABCDEFGH" />
  </head>
</html>
```

## How to contribute

### Questions, feedback, and suggestions

If you have any questions, feedback, or suggestions head over to the [discussions page](https://github.com/tony-sull/astro-fathom/discussions).

### Bugs

If you find a bug please open an [issue](https://github.com/tony-sull/astro-fathom/issues). Community pull requests to fix the issue are always appreciated!
