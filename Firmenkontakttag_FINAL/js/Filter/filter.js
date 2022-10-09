/**
 * fetch data.json and add to firmen for first run
 */
let firmenData;
fetch("../Database/data.json")
  .then((response) => response.json())
  .then((data) => {
    firmenData = data;
    firmenData.firmen.forEach(
      (firma) =>
        document
          .getElementById("firmen")
          .appendChild(createFirmencard(firma, null)) //der boss war hier uwu
    );
  });

/**
 * Creates a firma (as html element) based on information
 * @param firma firmenparams
 * @returns HTMLELEMENT of Firmacard
 */
function createFirmencard(firma, filter) {
  /**
   * params
   */
  const { logo, name, location, text, link } = firma;

  /**
   * Filter
   */
  if (filter != null) {
    if (text.toLowerCase().indexOf(filter.toLowerCase()) < 0) {
      return document.createDocumentFragment();
    }
  }

  /**
   * Topgrid
   *
   *<div class="top-grid">
   *     <!-- logo -->
   *     <img src="../logos/Bildlaufgruppe 6.png" alt="logo" class="logo" />
   *     <!-- name -->
   *     <div class="name">Vitronic</div>
   * </div>
   */
  const topGrid = document.createElement("div");
  const topGrid_img = document.createElement("img");
  const topGrid_name = document.createElement("div");
  topGrid.classList.add("top-grid");
  topGrid_img.classList.add("logo");
  topGrid_img.src = logo;
  topGrid_img.alt = "logo";
  topGrid_name.classList.add("name");
  topGrid_name.innerHTML = name;
  topGrid.appendChild(topGrid_img);
  topGrid.appendChild(topGrid_name);

  /**
   *
   * Locaciton grid
   *
   * <div class="location-grid">
   *   <img src="../icons/location-outline.svg" alt="" class="icon" />
   *   <!-- location -->
   *   <div class="location">Wiesbaden</div>
   * </div>
   */
  const locationGrid = document.createElement("div");
  const locationGrid_img = document.createElement("img");
  const locationGrid_location = document.createElement("div");
  locationGrid.classList.add("location-grid");
  locationGrid_img.src = "../icons/location-outline.svg";
  locationGrid_img.alt = "icon";
  locationGrid_img.classList.add("icon");
  locationGrid_location.innerHTML = location;
  locationGrid.appendChild(locationGrid_img);
  locationGrid.appendChild(locationGrid_location);

  /**
   * Text
   *
   * <div class="text">
   *  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
   *  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
   *  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
   *  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
   *  consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
   *  nec, vulputate
   * </div>
   */
  const text_div = document.createElement("div");
  text_div.classList.add("text");
  text_div.innerHTML = text;

  /**
   *
   * Link
   *
   * <!-- link -->
   *  <a href="http://www.vitronic.com" target="_blank" class="link"
   *    >www.vitronic.com</a
   *  >
   */
  const link_div = document.createElement("a");
  link_div.classList.add("link");
  link_div.href = "http://" + link;
  link_div.target = "_blank";
  link_div.innerHTML = link;

  /**
   *
   * Bottom grid
   *
   * <div class="bottom-grid">
   *   <img src="../icons/bookmark-outline.svg" alt="" class="icon" />
   *   <button>
   *    <a href="details.html">Details</a><
   *   /button>
   * </div>
   */
  const bottomGrid = document.createElement("div");
  const bottomGrid_img = document.createElement("img");
  const bottomGrid_button = document.createElement("button");
  const bottomGrid_button_a = document.createElement("a");
  bottomGrid.classList.add("bottom-grid");
  bottomGrid_img.src = "../icons/bookmark-outline.svg";
  bottomGrid_img.alt = "icon";
  bottomGrid_img.classList.add("icon");
  bottomGrid_button_a.href = "details.html";
  bottomGrid_button_a.innerHTML = "Details";
  bottomGrid_button.appendChild(bottomGrid_button_a);
  bottomGrid.appendChild(bottomGrid_img);
  bottomGrid.appendChild(bottomGrid_button);

  /**
   * Card
   */
  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(topGrid);
  card.appendChild(locationGrid);
  card.appendChild(text_div);
  card.appendChild(link_div);
  card.appendChild(bottomGrid);

  /**
   * Return Object with params
   */
  return card;
}

/**
 * Renders cards based on input
 */
function filter() {
  var input = document.getElementById("input");

  /**
   * Delete all First
   */
  var elements = document
    .getElementById("firmen")
    .getElementsByClassName("card");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  /**
   * Render with filter props
   */
  firmenData.firmen.forEach((firma) =>
    document
      .getElementById("firmen")
      .appendChild(createFirmencard(firma, input.value))
  );

  // filter = input.value.toUpperCase();
  // div = document.getElementById("searchwords");
  // li = ul.getElementsByTagName("li");
  // for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         li[i].style.display = "";
  //     } else {
  //         li[i].style.display = "none";
  //     }
  // }
}

/**
 * Resets filter
 */
function cancel() {
  /**
   * Delete all First
   */
  var elements = document
    .getElementById("firmen")
    .getElementsByClassName("card");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  /**
   * Reset input
   */
  document.getElementById("input").value = "";

  /**
   * Render all
   */
  firmenData.firmen.forEach((firma) =>
    document.getElementById("firmen").appendChild(createFirmencard(firma, null))
  );
}


