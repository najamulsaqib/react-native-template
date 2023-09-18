# Project Name

    This is the description of Project Name

## Installation

```sh
npx react-native init AwesomeTSProject --template=https://github.com/najamulsaqib/react-native-template.git
```

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
npx react-native generate-bootsplash --help
```
--- or ---
```bash
yarn react-native generate-bootsplash --help
```

The command can take multiple arguments:

```bash
Usage: react-native generate-bootsplash [options] <logo>

Generate a launch screen using a logo file path (PNG or SVG)

Options:
  --platforms <list>          Platforms to generate for, separated by a comma (default: "android,ios,web")
  --background <string>       Background color (in hexadecimal format) (default: "#fff")
  --logo-width <number>       Logo width at @1x (in dp - we recommend approximately ~100) (default: 100)
  --assets-output <string>    Assets output directory path
  --flavor <string>           Android flavor build variant (where your resource directory is) (default: "main")
  --html <string>             HTML template file path (your web app entry point) (default: "index.html")
  --license-key <string>      License key to enable brand and dark mode assets generation
  --brand <string>            Brand file path (PNG or SVG)
  --brand-width <number>      Brand width at @1x (in dp - we recommend approximately ~80) (default: 80)
  --dark-background <string>  [dark mode] Background color (in hexadecimal format)
  --dark-logo <string>        [dark mode] Logo file path (PNG or SVG)
  --dark-brand <string>       [dark mode] Brand file path (PNG or SVG)
  -h, --help                  display help for command
```

#### Full command usage example

```bash
yarn react-native generate-bootsplash path/to/image.png \
  --background=F5FCFF \
  --logo-width=100 \
  --assets-output=src/Assets/bootsplash \
  --flavor=main
```

**⚠️ After running above command:**
> Copy all drawable-<*> assets to relative mipmap-<*> folders ```example drawable-hdpi/bootsplash_logo.png to mipmap-hdpi```

## Error

If facing any error when installing nodemodules or pods from iOS, remove all .lock files i.e; yarn.lock, Podfile.lock

## Meta
Distributed under the FALCON CONSULTING license. See `LICENSE` for more information.
