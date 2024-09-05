const side2 = new Proxy({"src":"/_astro/side-2.BR_M7R6L.png","width":479,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/side-2.png";
							}
							
							return target[name];
						}
					});

export { side2 as default };
