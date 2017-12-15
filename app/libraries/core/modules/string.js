export default class String
{

  static capitalize (s)
  {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  
}
