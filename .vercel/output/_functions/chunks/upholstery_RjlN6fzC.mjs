const upholstery = new Proxy({"src":"/_astro/upholstery.udr9OY1y.png","width":498,"height":297,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/upholstery.png";
							}
							
							return target[name];
						}
					});

export { upholstery as default };
