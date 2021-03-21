// 最新記事取得
$(function(){
  var taxonomys = new Object;
  $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/news_cat', function(json){
    //test_taxonomyのタームID、ターム名から変換テーブル作成
    for(var i=0;i < json.length;i++){
      taxonomys[json[i].id] = json[i].name;
    }

    //記事データ中のtest_taxonomyタームIDからターム名に変換
    $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/news/?_embed', function(json1){

      $html_set = '<div>';
      $(json1).each(function() {
        $title = this.title.rendered;
        $excerpt = this.excerpt.rendered;
        $date = new Date(this.date_gmt);
        $month = $date.getMonth()+1;
        $date_set = $date.getFullYear() + '.' + $month + '.' + $date.getDate() + '';
        $thumbnail_src = this._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

        $html_set += '<div class="new-release-wrap">' + '<div class="new-news bgimg pos-r" style="background-image: url('+ $thumbnail_src +')">' + '<a href="' + this.link + '" class="pos-a-area"></a>' + '</div>' + '<div class="event-text-wrap new-text-wrap">' + '<h4>' + $title + '</h4>' + '<p class="release-date">' + $date_set + '</p>' + '</div>' + '</div>' +

          '</div>'+
          '';
      })
      $html_set += '</div>';
      $($html_set).appendTo('.newRelease');

    });
  });
});

// 過去記事取得
$(function(){
  var taxonomys = new Object;
  $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/a_news_cat', function(json){
    //test_taxonomyのタームID、ターム名から変換テーブル作成
    for(var i=0;i < json.length;i++){
      taxonomys[json[i].id] = json[i].name;
    }

    //記事データ中のtest_taxonomyタームIDからターム名に変換
    $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/a_news/?_embed', function(json1){

      $html_set = '<div>';
      $(json1).each(function() {
        $title = this.title.rendered;
        $excerpt = this.excerpt.rendered;
        $date = new Date(this.date_gmt);
        $month = $date.getMonth()+1;
        $date_set = $date.getFullYear() + '.' + $month + '.' + $date.getDate() + '';
        $thumbnail_src = this._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

        $html_set += '<div class="al-inner">' + '<div class="archive-release-wrap fle-c-pc pos-r">' + '<a href="' + this.link + '" class="pos-a-area"></a>' + '<div class="release-image-wrap pos-r">' + '<div class="release-image bgimg pos-a-area" style="background-image: url('+ $thumbnail_src +')"></div>' + '</div>' + '<div class="event-text-wrap archive-text-wrap">' + '<h4>' + $title + '</h4>' + '<p class="release-date">' + $date_set + '</p>' + '<div class="release-text">' + $excerpt +'</div>' + '</div>' + '</div>' +

          '</div>'+
          '';
      })
      $html_set += '</div>';
      $($html_set).appendTo('.Archiverelease');

      for(var i=0;i < json1.length;i++){
        for(var j=0;j < json1[i].a_news_cat.length;j++){
          var term_name = taxonomys[json1[i].a_news_cat[j]];
          console.log(term_name);
        }
      }
    });
  });
});

// コンテンツ情報取得
$(function(){
  var taxonomys = new Object;
  $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/contents_cat', function(json){
    //test_taxonomyのタームID、ターム名から変換テーブル作成
    for(var i=0;i < json.length;i++){
      taxonomys[json[i].id] = json[i].name;
    }

    //記事データ中のtest_taxonomyタームIDからターム名に変換
    $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/contents/?_embed', function(json1){

      $html_set = '<div class="contents-wrapper slider-nav">';
      $(json1).each(function() {
        $title = this.acf["content_title"];
        $date = this.acf["content_date"];
        $thumbnail_src = this._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

        $html_set += '<div class="contents-inner box-area pos-r">' + '<div class="contents-image pos-r bgimg" style="background-image: url('+ $thumbnail_src +')"></div>' + '<a href="' + this.link + '" target="_blank" class="contents-links web-links pos-a-area"></a>' + '<div class="c-text-inner">' + '<h3>' + $title + '</h3>' + '<p class="event-date">' + $date + '</p>' + '</div>' +

          '</div>'+
          '';
      })
      $html_set += '</div>';
      $($html_set).appendTo('.LatestContents');

      for(var i=0;i < json1.length;i++){
        for(var j=0;j < json1[i].contents_cat.length;j++){
          var term_name = taxonomys[json1[i].contents_cat[j]];
          console.log(term_name);
          var cat_wrap = '<div class="contents-text-wrap">'
          + term_name
          + '</div>';
          $('.Latest-Text-Wrap').append(cat_wrap);
        }
      }
    });
  });
});

// グッズ取得
$(function(){
  var taxonomys = new Object;
  $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/goods_cat', function(json){
    //test_taxonomyのタームID、ターム名から変換テーブル作成
    for(var i=0;i < json.length;i++){
      taxonomys[json[i].id] = json[i].name;
    }

    //記事データ中のtest_taxonomyタームIDからターム名に変換
    $.getJSON('http://aquariumbynaked.com/wp-json/wp/v2/goods/?_embed', function(json1){

      $html_set = '<div class="fle-b pos-r fle-w">';
      $(json1).each(function() {
        $title = this.title.rendered;
        $excerpt = this.excerpt.rendered;
        $place = this.acf["b_content_place"];
        $link = this.acf["link"];
        $date = this.acf["content_date"];
        $thumbnail_src = this._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

        $html_set += '<div class="goods-thumb-wrap pos-r"><div class="goods-image goodsImg01 bgimg pos-r" style="background-image: url(' + $thumbnail_src + ')"></div><div class="goods-text-wrap"><div class="goods-head"><p class="goods-title">' + $title + '</p></div>' + '</div>' +

          '</div>'+
          '';
      })
      $html_set += '</div>';
      $($html_set).appendTo('.goods');

      for(var i=0;i < json1.length;i++){
        for(var j=0;j < json1[i].goods_cat.length;j++){
          var term_name = taxonomys[json1[i].goods_cat[j]];
          console.log(term_name);
        }
      }
      var cat_wrap = '<div class="goods-category category">'
      + term_name
      + '</div>';
      $('.goods-text-wrap').append(cat_wrap);
    });
  });
});