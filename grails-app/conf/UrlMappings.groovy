class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/api/books/$action?/$id?(.$format)?"{
          controller = 'book'
        }

        // Do not show index.gsp
        //        "/"(redirect:"/index.gsp")
        "500"(view:'/error')
	}
}
