const hero = new Proxy({"src":"/_astro/hero.CwDiher9.png","width":553,"height":335,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
