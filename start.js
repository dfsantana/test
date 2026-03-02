var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "yes",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    PT01: {
      name: "Aveiro"
    },
    PT02: {
      name: "Beja"
    },
    PT03: {
      name: "Braga"
    },
    PT04: {
      name: "Bragança"
    },
    PT05: {
      name: "Castelo Branco"
    },
    PT06: {
      name: "Coimbra"
    },
    PT07: {
      name: "Évora"
    },
    PT08: {
      name: "Faro"
    },
    PT09: {
      name: "Guarda"
    },
    PT10: {
      name: "Leiria"
    },
    PT11: {
      name: "Lisboa"
    },
    PT12: {
      name: "Portalegre"
    },
    PT13: {
      name: "Porto"
    },
    PT14: {
      name: "Santarém"
    },
    PT15: {
      name: "Setúbal"
    },
    PT16: {
      name: "Viana do Castelo"
    },
    PT17: {
      name: "Vila Real"
    },
    PT18: {
      name: "Viseu"
    },
    PT20: {
      name: "Azores"
    },
    PT30: {
      name: "Madeira"
    }
  },
  locations: {
    "0": {
      name: "A",
      lat: "38.716667",
      lng: "-9.133333",
      description: "<img src=\"https://simplemaps.com/static/img/frog.png\" />",
      size: "15",
      type: "circle",
      url: "https://www.msn.com/pt-pt/noticias/ultimas/trovoada-rajadas-at%C3%A9-120-km-h-e-ondas-que-podem-atingir-os-11-metros-h%C3%A1-nova-depress%C3%A3o-a-caminho-de-portugal/ar-AA1XjJ8R?ocid=msedgntp&pc=U531&cvid=69a58cd1e5444193ad31e1957fac61c6&ei=7",
      opacity: "0.8"
    },
    "1": {
      lat: "39.716667",
      lng: "-9.133333",
      size: "15",
      name: "B",
      description: "as",
      type: "circle"
    }
  },
  labels: {
    PT01: {
      name: "Aveiro",
      parent_id: "PT01"
    },
    PT02: {
      name: "Beja",
      parent_id: "PT02"
    },
    PT03: {
      name: "Braga",
      parent_id: "PT03"
    },
    PT04: {
      name: "Bragança",
      parent_id: "PT04"
    },
    PT05: {
      name: "Castelo Branco",
      parent_id: "PT05"
    },
    PT06: {
      name: "Coimbra",
      parent_id: "PT06"
    },
    PT07: {
      name: "Évora",
      parent_id: "PT07"
    },
    PT08: {
      name: "Faro",
      parent_id: "PT08"
    },
    PT09: {
      name: "Guarda",
      parent_id: "PT09"
    },
    PT10: {
      name: "Leiria",
      parent_id: "PT10"
    },
    PT11: {
      name: "Lisboa",
      parent_id: "PT11"
    },
    PT12: {
      name: "Portalegre",
      parent_id: "PT12"
    },
    PT13: {
      name: "Porto",
      parent_id: "PT13"
    },
    PT14: {
      name: "Santarém",
      parent_id: "PT14"
    },
    PT15: {
      name: "Setúbal",
      parent_id: "PT15"
    },
    PT16: {
      name: "Viana do Castelo",
      parent_id: "PT16"
    },
    PT17: {
      name: "Vila Real",
      parent_id: "PT17"
    },
    PT18: {
      name: "Viseu",
      parent_id: "PT18"
    },
    PT20: {
      name: "Azores",
      parent_id: "PT20"
    },
    PT30: {
      name: "Madeira",
      parent_id: "PT30"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
