function abbrevName(name){
  return name.replace(/\b(\w)\w+/g, '$1.').replace(/\s/,"").replace(/\.$/, '').toUpperCase();
}

abbrevName("sam harris");
