export function UUID()
{
    return window.URL.createObjectURL(new Blob([])).split('/').pop();
}