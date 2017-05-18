import React from 'react';
import '../css/nav.css';

class Header extends React.Component {
    render(){
    	
        return (
        	<div>
	        	<div className="nav">
	   				
	  		 	 <div className="contact">
	    		   서비스 지원
	      		 <a href="tel:023552907"> 02-355-2907</a>
	    			</div>
				</div>
			</div>
        );
    }
}

export default Header;