const pricing = new Proxy({"src":"/_astro/pricing.BTEeDxp_.png","width":499,"height":297,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/pricing.png";
							}
							
							return target[name];
						}
					});

export { pricing as default };
