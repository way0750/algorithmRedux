# Commonly Used HTML Tags

## Document Structure
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<html>`     | The root element of an HTML document.                                           | `lang`: Language code (e.g., `en`, `fr`) |
| `<head>`     | Contains meta-information about the document.                                   |                                  |
| `<body>`     | Contains the visible content of the document.                                   | `onload`: JavaScript code <br> `onunload`: JavaScript code |
| `<title>`    | Specifies the title of the document, shown in the browser's title bar or tab.   |                                  |

## Text Content
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<p>`        | Defines a paragraph.                                                            | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<h1> to <h6>`| Defines HTML headings, with `<h1>` being the highest and `<h6>` the lowest.     | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<a>`        | Defines a hyperlink.                                                            | `href`: URL <br> `target`: `_self`, `_blank`, `_parent`, `_top` <br> `rel`: `nofollow`, `noopener`, `noreferrer` <br> `download`: filename <br> `hreflang`: Language code <br> `type`: MIME type |
| `<span>`     | Defines a section of text with no specific meaning.                             | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<strong>`   | Defines important text.                                                         |                                  |
| `<em>`       | Defines emphasized text.                                                        |                                  |
| `<br>`       | Inserts a single line break.                                                    | `clear`: `left`, `right`, `all`, `none` |
| `<hr>`       | Defines a thematic change in the content.                                       | `size`: Number <br> `width`: Length, Percentage <br> `align`: `left`, `center`, `right` <br> `noshade`: `noshade` |

## Lists
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<ul>`       | Defines an unordered list.                                                      | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<ol>`       | Defines an ordered list.                                                        | `id`: Text <br> `class`: Text <br> `style`: CSS styles <br> `start`: Number <br> `type`: `1`, `A`, `a`, `I`, `i` <br> `reversed`: `true`, `false` |
| `<li>`       | Defines a list item.                                                            | `id`: Text <br> `class`: Text <br> `style`: CSS styles <br> `value`: Number |

## Forms
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<form>`     | Defines an HTML form for user input.                                            | `action`: URL <br> `method`: `get`, `post` <br> `enctype`: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` <br> `autocomplete`: `on`, `off` <br> `novalidate`: `novalidate` <br> `target`: `_self`, `_blank`, `_parent`, `_top` <br> `name`: Text |
| `<input>`    | Defines an input control.                                                       | `type`: `text`, `password`, `submit`, `reset`, `radio`, `checkbox`, `button`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `image`, `month`, `number`, `range`, `search`, `tel`, `time`, `url`, `week` <br> `name`: Text <br> `value`: Text <br> `placeholder`: Text <br> `required`: `required` <br> `autofocus`: `autofocus` <br> `disabled`: `disabled` <br> `readonly`: `readonly` <br> `min`: Number <br> `max`: Number <br> `step`: Number <br> `multiple`: `multiple` |
| `<textarea>` | Defines a multiline input control (text area).                                  | `name`: Text <br> `rows`: Number <br> `cols`: Number <br> `placeholder`: Text <br> `required`: `required` <br> `disabled`: `disabled` <br> `readonly`: `readonly` <br> `maxlength`: Number <br> `wrap`: `soft`, `hard` |
| `<button>`   | Defines a clickable button.                                                     | `type`: `button`, `submit`, `reset` <br> `name`: Text <br> `value`: Text <br> `disabled`: `disabled` <br> `autofocus`: `autofocus` |
| `<select>`   | Defines a drop-down list.                                                       | `name`: Text <br> `size`: Number <br> `multiple`: `multiple` <br> `disabled`: `disabled` |
| `<option>`   | Defines an option in a drop-down list.                                          | `value`: Text <br> `selected`: `selected` <br> `disabled`: `disabled` |
| `<label>`    | Defines a label for an `<input>` element.                                       | `for`: Element ID |

## Tables
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<table>`    | Defines a table.                                                                | `id`: Text <br> `class`: Text <br> `style`: CSS styles <br> `border`: Number <br> `cellpadding`: Number <br> `cellspacing`: Number <br> `summary`: Text |
| `<tr>`       | Defines a row in a table.                                                       | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<th>`       | Defines a header cell in a table.                                               | `id`: Text <br> `class`: Text <br> `style`: CSS styles <br> `scope`: `row`, `col`, `rowgroup`, `colgroup` |
| `<td>`       | Defines a cell in a table.                                                      | `id`: Text <br> `class`: Text <br> `style`: CSS styles <br> `colspan`: Number <br> `rowspan`: Number |
| `<caption>`  | Defines a table caption.                                                        | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<colgroup>` | Specifies a group of one or more columns in a table for formatting.             | `span`: Number |
| `<col>`      | Specifies column properties for each column within a `<colgroup>`.              | `span`: Number |

# Less Commonly Used HTML Tags

## Multimedia
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<img>`      | Embeds an image in the document.                                                | `src`: URL <br> `alt`: Text <br> `width`: Number <br> `height`: Number <br> `title`: Text <br> `longdesc`: URL <br> `loading`: `lazy`, `eager` |
| `<audio>`    | Embeds sound content.                                                           | `src`: URL <br> `controls`: `controls` <br> `autoplay`: `autoplay` <br> `loop`: `loop` <br> `muted`: `muted` <br> `preload`: `none`, `metadata`, `auto` |
| `<video>`    | Embeds video content.                                                           | `src`: URL <br> `controls`: `controls` <br> `autoplay`: `autoplay` <br> `loop`: `loop` <br> `muted`: `muted` <br> `preload`: `none`, `metadata`, `auto` <br> `width`: Number <br> `height`: Number |
| `<iframe>`   | Embeds another HTML page into the current page.                                 | `src`: URL <br> `width`: Number <br> `height`: Number <br> `name`: Text <br> `sandbox`: `allow-forms`, `allow-modals`, `allow-orientation-lock`, `allow-pointer-lock`, `allow-popups`, `allow-popups-to-escape-sandbox`, `allow-presentation`, `allow-same-origin` |

## Forms (Advanced)
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<fieldset>` | Groups related elements in a form.                                              | `disabled`: `disabled` <br> `form`: Form ID <br> `name`: Text |
| `<legend>`   | Defines a caption for a `<fieldset>`.                                           | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<datalist>` | Specifies a list of pre-defined options for an `<input>` element.               | `id`: Text |
| `<output>`   | Represents the result of a calculation.                                         | `for`: Element IDs <br> `form`: Form ID <br> `name`: Text |
| `<progress>` | Represents the completion progress of a task.                                   | `value`: Number <br> `max`: Number |
| `<meter>`    | Represents a scalar measurement within a known range.                           | `value`: Number <br> `min`: Number <br> `max`: Number <br> `low`: Number <br> `high`: Number <br> `optimum`: Number |

## Semantic Elements
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<article>`  | Defines an article.                                                             | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<section>`  | Defines a section.                                                              | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<nav>`      | Defines navigation links.                                                       | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<aside>`    | Defines content aside from the page content.                                    | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<header>`   | Defines a header for a document or section.                                     | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<footer>`   | Defines a footer for a document or section.                                     | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<main>`     | Specifies the main content of a document.                                       | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<figure>`   | Specifies self-contained content.                                               | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<figcaption>`| Defines a caption for a `<figure>`.                                            | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<mark>`     | Defines marked/highlighted text.                                                | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<time>`     | Defines a specific time (or datetime).                                          | `datetime`: Date and time |

## Metadata
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<meta>`     | Defines metadata about an HTML document.                                        | `name`: Text <br> `content`: Text <br> `charset`: Character encoding (e.g., `UTF-8`) <br> `http-equiv`: `content-type`, `default-style`, `refresh`, `set-cookie` |
| `<link>`     | Defines the relationship between a document and an external resource.           | `rel`: `alternate`, `author`, `canonical`, `help`, `icon`, `license`, `next`, `pingback`, `prefetch`, `preload`, `prev`, `search`, `stylesheet` <br> `href`: URL <br> `type`: MIME type <br> `media`: Media query <br> `hreflang`: Language code <br> `sizes`: Icon size |

## Scripts
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<script>`   | Defines client-side JavaScript.                                                 | `src`: URL <br> `type`: `text/javascript`, `module` <br> `async`: `async` <br> `defer`: `defer` <br> `crossorigin`: `anonymous`, `use-credentials` |
| `<noscript>` | Defines an alternate content for users that do not support client-side scripts. |                                  |

## Embedded Content
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<embed>`    | Embeds external content at the specified point in the document.                 | `src`: URL <br> `type`: MIME type <br> `width`: Number <br> `height`: Number |
| `<object>`   | Defines an embedded object.                                                     | `data`: URL <br> `type`: MIME type <br> `width`: Number <br> `height`: Number <br> `name`: Text <br> `usemap`: Image map name <br> `form`: Form ID |
| `<param>`    | Defines parameters for an `<object>` element.                                   | `name`: Text <br> `value`: Text |

## Interactive Elements
| **Tag**      | **Description**                                                                 | **Attributes and Values**        |
|--------------|---------------------------------------------------------------------------------|----------------------------------|
| `<details>`  | Defines additional details that the user can view or hide.                      | `open`: `open` |
| `<summary>`  | Defines a visible heading for a `<details>` element.                            | `id`: Text <br> `class`: Text <br> `style`: CSS styles |
| `<dialog>`   | Defines a dialog box or window.                                                 | `open`: `open` |
