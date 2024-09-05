const logo = new Proxy({"src":"/_astro/logo.DpTKya6K.svg","width":58,"height":56,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/logo.svg";
							}
							
							return target[name];
						}
					});

export { logo as default };
