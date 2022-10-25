<div align="center"> 
 <h1> QUOTIER </h1>
 <img src="https://quotier.vercel.app/quote" alt="quotes"/>
 <br/>
 <img src="https://img.shields.io/github/package-json/v/GDSC-RTU/quotier-readme-quotes?color=g&label=QUOTIER">
 <img src="https://img.shields.io/npm/v/npm">
 <img src="https://img.shields.io/github/languages/code-size/GDSC-RTU/quotier-readme-quotes?logo=github">
</div>

## API for Quotes📑 in JSON and rendered SVG form - Use it anywhere on GitHub, Your Website or wherever you like✨

## How to use

In your GitHub readme

```markdown
![QUOTES](https://quotier.vercel.app/quote)
```

In html

```html
<img src="https://quotier.vercel.app/quote" alt="Quotes" />
```

## Endpoints

| EndPoint                                                       | Returns                                            |
| -------------------------------------------------------------- | -------------------------------------------------- |
| [/](https://quotier.vercel.app/)                               | Hello Page in API                                  |
| [/quote](https://quotier.vercel.app/quote)                     | A random quote in rendered SVG form                |
| [/quote?type=json](https://quotier.vercel.app/quote?type=json) | Quote in json format                               |
| [/quote?theme=light](https://quotier.vercel.app/quote?theme=light) | Quote in specified theme  
| [/all](https://quotier.vercel.app/all)                         | All quotes in JSON format within a single response |

## Themes
By default, when a request to the ***/quote*** endpoint is sent, it returns an svg with the dark theme. To specify a custom theme, use the ***theme*** query param. The following request returns an svg with the blue theme.

    https://quotier.vercel.app/quote?theme=blue

![QUOTES](https://quotier.vercel.app/quote?theme=blue)

## Available Themes
 - dark (default)
 - light
 - blue

## Contribution Guidelines

Append your quote to quote.json inside the quote/ folder and raise the PR.

```
{
    "quote":"Your new Quote",
    "author":"Author of your quote",
}
```

<details>

<summary>Run the application locally</summary>

- Make sure you have NodeJS installed. Check it by typing this command in your terminal -

```
node --version
```

- Fork this repository.
- Clone this repository by running the following command in your terminal -

```
git clone https://github.com/pushkarydv/quotier-readme-quote
```

- cd into the folder by using the following command -

```
cd quotier-readme-quote
```

- Install the dependencies by running the following command -

```
npm install
```

- **Setting Up development Enviornment create a `.env` file in root folder and add the following line**

```
NODE_ENV = development
```

- To run the application, type the following command in your terminal -

```
npm run dev
```

- Access the results produced by accessing the following URL in your browser -

```
localhost:3000
```

</details>
