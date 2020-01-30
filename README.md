# d1gallery

**DEPRECATED**

This is no longer maintained.  
Please consider using [d1-web](https://github.com/vvvkor/d1-web) instead.

---

Add-on for [d1](https://github.com/vvvkor/d1).  
Lighweight image gallery.  
[Demo & docs](https://vvvkor.github.io/d1#gallery)

## Install

```
npm install d1gallery
```

## Usage

On page load call:
```
d1gallery.init(options);
```

Place links with class ``pic`` inside div with class ``gallery``.

## Example

```
<div class="gallery">
  <a href="1.png" class="pic" title="Picture 1">1</a>
  <a href="2.png" class="pic" title="Picture 2">2</a>
  <a href="3.png" class="pic" title="Picture 3">3</a>
</div>
```

## Options

### hashCancel

Hash of "close" link.  
Default: ``"#cancel"``

### idPrefix

Prefix of the ``id`` of generated image elements.  
Default: ``"pic"``

### num

Whether to show item index when viewing gallery.  
Default: ``true``

### qsGallery

Query selector of gallery container elements.  
Default: ``".gallery"``

### qsLinks

Query selector of links to make gallery of.  
Default: ``"a.pic"``

## Browser Support

* IE 10+
* Latest Stable: Chrome, Firefox, Opera, Safari

## License

[MIT](./LICENSE)
