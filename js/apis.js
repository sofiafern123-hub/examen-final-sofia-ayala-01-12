// /js/apis.js
const EL = sel => document.querySelector(sel);

/* OpenWeather */
window.buscarClima = async function() {
  const ciudad = EL("#ciudad").value.trim();
  const apiKey = "8fce7914c5a7c6e9c3508e1f7490f7d9"; // reemplaza por tu clave
  if (!ciudad) return alert("Ingrese una ciudad");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`;
  try {
    const r = await fetch(url);
    const d = await r.json();
    if (d.cod !== 200) { EL("#resultado").textContent = d.message || "Error consultando clima"; return; }
    EL("#resultado").innerHTML = `
      <div class="card">
        <h3>${d.name}</h3>
        <p><strong>Temperatura:</strong> ${d.main.temp} °C</p>
        <p><strong>Condición:</strong> ${d.weather[0].description}</p>
        <p><strong>Viento:</strong> ${d.wind.speed} m/s</p>
      </div>`;
  } catch(e) { EL("#resultado").textContent = "Error de red"; }
};

/* REST Countries */
window.buscarPais = async function() {
  const nombre = EL("#pais").value.trim();
  if (!nombre) return alert("Ingrese el nombre del país");
  try {
    const r = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(nombre)}?fullText=true`);
    const data = await r.json();
    if (!Array.isArray(data) || !data.length) { EL("#paisRes").textContent = "No encontrado"; return; }
    const p = data[0];
    EL("#paisRes").innerHTML = `
      <div class="card">
        <h3>${p.name?.common}</h3>
        <p><strong>Capital:</strong> ${p.capital?.[0] || "N/A"}</p>
        <p><strong>Región:</strong> ${p.region}</p>
        <p><strong>Población:</strong> ${p.population?.toLocaleString()}</p>
        <img src="${p.flags?.png}" alt="Bandera de ${p.name?.common}" style="max-width:160px;">
      </div>`;
  } catch(e) { EL("#paisRes").textContent = "Error de red"; }
};

/* PokéAPI */
window.buscarPokemon = async function() {
  const nombre = EL("#pokemon").value.trim().toLowerCase();
  if (!nombre) return alert("Ingrese el nombre o número del Pokémon");
  try {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nombre)}`);
    if (!r.ok) { EL("#pokeRes").textContent = "Pokémon no encontrado"; return; }
    const p = await r.json();
    EL("#pokeRes").innerHTML = `
      <div class="card">
        <h3>${p.name.toUpperCase()}</h3>
        <img src="${p.sprites?.front_default}" alt="${p.name}">
        <p><strong>Altura:</strong> ${p.height}</p>
        <p><strong>Peso:</strong> ${p.weight}</p>
        <p><strong>Tipos:</strong> ${p.types?.map(t => t.type.name).join(", ")}</p>
      </div>`;
  } catch(e) { EL("#pokeRes").textContent = "Error de red"; }
};

/* Rick & Morty */
window.buscarPersonajesRM = async function() {
  const q = EL("#rmQuery").value.trim();
  try {
    const r = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(q)}`);
    const d = await r.json();
    if (!d.results || !d.results.length) { EL("#rmRes").textContent = "Sin resultados"; return; }
    EL("#rmRes").innerHTML = `<div class="grid">` + d.results.slice(0, 12).map(ch => `
      <div class="card">
        <img src="${ch.image}" alt="${ch.name}" style="width:100%;border-radius:.5rem;">
        <h4>${ch.name}</h4>
        <p><strong>Estado:</strong> ${ch.status}</p>
        <p><strong>Especie:</strong> ${ch.species}</p>
      </div>`).join("") + `</div>`;
  } catch(e) { EL("#rmRes").textContent = "Error de red"; }
};

/* CoinGecko */
window.buscarCripto = async function() {
  const id = EL("#criptoId").value.trim().toLowerCase(); // ej: bitcoin, ethereum
  if (!id) return alert("Ingrese el ID de la criptomoneda (ej. bitcoin)");
  try {
    const r = await fetch(`https://api.coingecko.com/api/v3/coins/${encodeURIComponent(id)}`);
    if (!r.ok) { EL("#criptoRes").textContent = "Criptomoneda no encontrada"; return; }
    const c = await r.json();
    EL("#criptoRes").innerHTML = `
      <div class="card">
        <h3>${c.name} (${c.symbol?.toUpperCase()})</h3>
        <img src="${c.image?.large}" alt="${c.name}" style="max-width:64px;">
        <p><strong>Precio USD:</strong> ${c.market_data?.current_price?.usd}</p>
        <p><strong>Market Cap:</strong> ${c.market_data?.market_cap?.usd?.toLocaleString()}</p>
        <p><strong>24h:</strong> ${c.market_data?.price_change_percentage_24h?.toFixed(2)}%</p>
      </div>`;
  } catch(e) { EL("#criptoRes").textContent = "Error de red"; }
};

/* Turuc (ejemplo de consumo Swagger) */
window.buscarTurucEjemplo = async function() {
  // Ajusta el endpoint real desde el Swagger de Turuc
  const r = await fetch("https://turuc.com.py/api/example"); // placeholder
  const d = await r.json();
  EL("#turucRes").textContent = JSON.stringify(d, null, 2);
};
