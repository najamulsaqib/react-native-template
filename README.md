# Project Name

    This is the description of Project Name

## Installation

```sh
yarn or yarn install 
```

IOS:

```sh
yarn pod 
```
or
```sh
cd ios && pod install
yarn ios
```

Android:

```sh
yarn android
```
### Assets generation for Bootsplash

In order to speed up the setup, we provide a **CLI** to generate assets, create the Android Drawable XML file and the iOS Storyboard file automatically ✨.

```bash
$ npx react-native generate-bootsplash --help
# --- or ---
$ yarn react-native generate-bootsplash --help
```

The command can take multiple arguments:

```bash
yarn react-native generate-bootsplash <logoPath>

Generate a launch screen using an original logo file

Options:
  --background-color <color>  color used as launch screen background (in hexadecimal format) (default: "#fff")
  --logo-width <width>        logo width at @1x (in dp - we recommend approximately ~100) (default: 100)
  --assets-path [path]        path to your static assets directory (useful to require the logo file in JS)
  --flavor <flavor>           [android only] flavor build variant (outputs in an android resource directory other than "main")
  -h, --help                  output usage information
```

#### Full command usage example

```bash
yarn react-native generate-bootsplash assets/bootsplash_logo_original.png \
  --background-color=F5FCFF \
  --logo-width=100 \
  --assets-path=assets \
  --flavor=main
```

## Error

If facing any error when installing nodemodules or pods from iOS, remove all .lock files i.e; yarn.lock, Podfile.lock

## Meta
Distributed under the FALCON CONSULTING license. See `LICENSE` for more information.
