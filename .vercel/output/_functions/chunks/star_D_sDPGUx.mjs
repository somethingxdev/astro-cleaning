const star = new Proxy({"src":"/_astro/star.Bp9V0AUi.png","width":127,"height":126,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/star.png";
							}
							
							return target[name];
						}
					});

export { star as default };
