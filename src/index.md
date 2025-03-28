---
title: Home
layout: gallery
---

<div id="gallery">
{%- for post in collections.all -%}
    {%- if post.data.featured == true %}
    <div><a href="{{ post.url }}" name="{{ post.tite }}"><img src="{{post.data.image}}" alt="{{ post.tite }}"></a></div>
    {%- endif -%}
{%- endfor -%}
</div>
