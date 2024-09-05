const grout = new Proxy({"src":"/_astro/grout.DITNqcJN.png","width":499,"height":297,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/grout.png";
							}
							
							return target[name];
						}
					});

export { grout as default };
