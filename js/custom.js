jQuery(function () {
     var $wrapper = jQuery(options_isw.wrapper_products), icon = options_isw.icon, pagination_selector = options_isw.wrapper_pagination, flag_load_next_part = false; if ($wrapper.length > 0 && options_isw.ajax_method != "method_simple_ajax_pagination") { jQuery(pagination_selector).hide(); }
     if (options_isw.ajax_method != "method_simple_ajax_pagination") {
          jQuery("html").on("click", "#woss-load-more-button", function (e) { e.preventDefault(); products_loop(); }); jQuery(window).scroll(function (event) {
               if ($wrapper.length > 0) {
                    var inview = isScrolledToBottom(options_isw.wrapper_products); if (inview && !flag_load_next_part) {
                         if (options_isw.ajax_method === "method_load_more_button") {
                              var next_url = jQuery(options_isw.selector_next).attr("href"); if (typeof next_url != 'undefined') { $wrapper.append('<div class="ws-more-btn-holder col-sm-12"><a class="btn ws-more-btn" id="woss-load-more-button" href="#">' + options_isw.load_more_button_text + '</a></div>'); if (options_isw.load_more_button_animate === "on") { jQuery(".ws-more-btn-holder").show().find('a').addClass('animated ' + options_isw.load_more_transition); } else { jQuery(".ws-more-btn-holder").show(); } }
                              flag_load_next_part = true;
                         } else { products_loop(); }
                    }
               }
          });
     } else { bind_pagination_clicks(); }
     function isScrolledToBottom(el) {
          if ($wrapper.length > 0) { if (jQuery(window).scrollTop() >= jQuery(el).offset().top + jQuery(el).outerHeight() - window.innerHeight - parseInt(options_isw.start_loading_x_from_end)) { return true; } }
          return false;
     }
     function bind_pagination_clicks() { $pagination_links = jQuery(pagination_selector).find('a'); $pagination_links.bind("click", function (e) { e.preventDefault(); var link = jQuery(this).attr("href"); products_loop(link); }); }
     function products_loop(url) {
          if (typeof url === 'undefined') { var url = jQuery(options_isw.selector_next).attr("href"); }
          flag_load_next_part = true; if (typeof url != 'undefined') {
               if (typeof isw_before_ajax == 'function') { isw_before_ajax(); }
               var preloader = '<div class="woss_preloader"><img src="' + options_isw.icon + '"/></div>'; $wrapper.append(preloader).fadeIn(); jQuery.get(url, function (data) {
                    var $data = jQuery(data); var shop_loop = $data.find(options_isw.wrapper_products); if (shop_loop.length > 0) {
                         var $new_pagination = $data.find(pagination_selector); if (options_isw.ajax_method != "method_simple_ajax_pagination") { $wrapper.append(shop_loop.html()).fadeIn(); jQuery(pagination_selector).hide().html($new_pagination.html()); } else {
                              var $new_results_count = $data.find(options_isw.wrapper_result_count); var $new_breadcrumb = $data.find(options_isw.wrapper_breadcrumb); $wrapper.hide().html(shop_loop.html()).fadeIn(); jQuery(pagination_selector).html($new_pagination.html()); if ($new_results_count.length > 0) { jQuery(options_isw.wrapper_result_count).html($new_results_count.html()); }
                              if ($new_breadcrumb.length > 0) { jQuery(options_isw.wrapper_breadcrumb).html($new_breadcrumb.html()); }
                         }
                    }
               }).done(function () {
                    jQuery(".woss_preloader,.ws-more-btn-holder").remove(); if (options_isw.ajax_method === "method_simple_ajax_pagination") { bind_pagination_clicks(); if (options_isw.animate_to_top === "on") { jQuery('html, body').animate({ scrollTop: options_isw.pixels_from_top }, 500, 'swing'); } }
                    flag_load_next_part = false; if (typeof isw_ajax_done == 'function') { isw_ajax_done(); }
               }).fail(function () { jQuery(".woss_preloader,.ws-more-btn-holder").remove(); $wrapper.hide().html(options_isw.error).fadeIn(); if (typeof isw_ajax_fail == 'function') { isw_ajax_fail(); } }).always(function () { if (typeof isw_after_ajax == 'function') { isw_after_ajax(); } });
          }
          else { jQuery(".woss_preloader,.ws-more-btn-holder").remove(); }
     }
});