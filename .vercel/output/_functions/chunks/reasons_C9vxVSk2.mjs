const reasons = new Proxy({"src":"/_astro/reasons.0kTRILiP.png","width":499,"height":297,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/reasons.png";
							}
							
							return target[name];
						}
					});

export { reasons as default };
