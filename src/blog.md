---
title: Blog
layout: page
---

<style>
  .substack-feed-embed { 
      display: grid; 
      gap: 20px; 
  } 
  .substack-post { 
      display: flex; 
      gap: 15px; 
      align-items: flex-start; 
      margin-bottom: 20px; 
      padding: 15px; 
      border: 1px solid #eee; 
      border-radius: 8px; 
  } 

  .substack-thumbnail { 
      width: 120px; 
      height: 120px; 
      object-fit: cover; 
      border-radius: 8px; 
      flex-shrink: 0; 
  } 

  .substack-post div { 
      flex: 1; 
  } 
</style>

<!-- Basic usage -->
<div id="substack-feed-embed"></div> 
<script> window.SubstackFeedWidget = 
	{ substackUrl: 
    	"xeladoesart.substack.com/", posts: 3, showImages: true, showDates: true 
	}; 
</script>
<script src="/js/embed-substack-rss.js"></script>
