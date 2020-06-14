@extends('layouts.adminkit')

@section('js')
    <script>

        /**
         * Check that the component is listed in the registry in laravel.tsx
         *
         * should return an array with 2 params:
         *   1. The component
         *   3. Component parameters to initialize
         */
        function renderLaravel() {
            return ['FormsBasicInputs', {}];
        }
    </script>
@endsection
