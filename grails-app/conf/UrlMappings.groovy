class UrlMappings {

	static mappings = {
        // Do not show index.gsp
        //        "/"(redirect:"/index.gsp")
        "500"(view:'/error')
	}
}
