function EnhanceLinkComponent(props) {
    return (props.isAuthenticated?props.children:'');
}

export default EnhanceLinkComponent;
