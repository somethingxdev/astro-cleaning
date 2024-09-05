const side1 = new Proxy({"src":"/_astro/side-1.CxxJAu5U.png","width":479,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/side-1.png";
							}
							
							return target[name];
						}
					});

export { side1 as default };
