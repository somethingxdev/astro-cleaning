const side3 = new Proxy({"src":"/_astro/side-3.CJNRrs9V.png","width":479,"height":224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/side-3.png";
							}
							
							return target[name];
						}
					});

export { side3 as default };
