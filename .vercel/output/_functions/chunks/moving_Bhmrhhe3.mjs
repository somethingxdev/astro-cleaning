const moving = new Proxy({"src":"/_astro/moving.BiMPjGYw.png","width":126,"height":126,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/moving.png";
							}
							
							return target[name];
						}
					});

export { moving as default };
