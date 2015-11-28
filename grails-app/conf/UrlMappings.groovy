class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        //        "/"(redirect:"/index.html")
        "/"(redirect:"/index.html")
        "500"(view:'/error')
	}
}
